using Confluent.Kafka;
using LukeSkywalker.Domain.Interface.Repository;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace LukeSkywalker.Domain.Handles
{
    public class MessageHandlerFilm : IHostedService
    {
        private readonly ILogger logger;
        private readonly IRepositoryFilm repository;
        
        public MessageHandlerFilm(ILogger<MessageHandlerFilm> _logger, IRepositoryFilm _repository)
        {
            logger = logger;
            repository = _repository;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {               
             var conf = new ConsumerConfig
            {
                GroupId = "Films-consumer",
                BootstrapServers = "host.docker.internal:9094",
                AutoOffsetReset = AutoOffsetReset.Earliest
            };

            using (var c = new ConsumerBuilder<Ignore, string>(conf).Build())
            {
                c.Subscribe("films");
                var cts = new CancellationTokenSource();
                try
                {
                    while (true)
                    {
                        var message = c.Consume(cts.Token);

                        //repository.Create(message.Value);

                        logger.LogInformation($"Mensagens recebida de {message.TopicPartitionOffset} : {message.Value} ");
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
