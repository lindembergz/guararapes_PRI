using Confluent.Kafka;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace LukeSkywalker.Domain.Handles
{
    public class MessageHandlerPlanet : IHostedService
    {
        private readonly ILogger _logger;
        public MessageHandlerPlanet(ILogger<MessageHandlerPlanet> logger)
        {
            _logger = logger;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {               
             var conf = new ConsumerConfig
            {
                GroupId = "Planets-consumer",
                BootstrapServers = "host.docker.internal:9094",
                AutoOffsetReset = AutoOffsetReset.Earliest
            };

            using (var c = new ConsumerBuilder<Ignore, string>(conf).Build())
            {
                c.Subscribe("planets");
                var cts = new CancellationTokenSource();
                try
                {
                    while (true)
                    {
                        var message = c.Consume(cts.Token);

                        _logger.LogInformation($"Mensagem: {message.Value} recebida de {message.TopicPartitionOffset}");


                    }
                }
                catch (OperationCanceledException)
                {
                    c.Close();
                }
            }
            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
