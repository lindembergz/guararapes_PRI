using Confluent.Kafka;
using LukeSkywalker.Domain.Entities;
using LukeSkywalker.Domain.Interface.Repository;
using LukeSkywalker.Domain.Interface.Service;
using LukeSkywalker.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace LukeSkywalker.Domain.Handles
{
    public class MessageHandlerFilm : BackgroundService, IHostedService
    {
        private readonly ILogger logger;

        public IServiceScopeFactory _serviceScopeFactory;

        private IServiceFilm service;

        public MessageHandlerFilm(IServiceScopeFactory serviceScopeFactory)
        {
            _serviceScopeFactory = serviceScopeFactory;
        }

        protected override Task ExecuteAsync(CancellationToken stoppingToken)
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

                        Films F = new Films();

                        var serializeOptions = new JsonSerializerOptions
                        {
                            PropertyNamingPolicy = JsonNamingPolicy.CamelCase                 
                        };

                        F = JsonSerializer.Deserialize<Films>( message.Value, serializeOptions);

                        using (var scope = _serviceScopeFactory.CreateScope())
                        {
                            service = scope.ServiceProvider.GetService<IServiceFilm>();
                            service.Create(F);
                        }
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
