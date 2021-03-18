using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HanSOLO.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using Swashbuckle.AspNetCore.Swagger;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using Microsoft.OpenApi.Models;
using Microsoft.Extensions.Hosting;
using HanSOLO.Interface.Repository;
using HanSOLO.Repository;
using HanSOLO.Service;

namespace HanSOLO
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();//.AddNewtonsoftJson(Options =>
           //Options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);


            string conectionString = Configuration.GetConnectionString("DefaultConnection");

            services.AddDbContextPool<ApplicationDbContext>(
               dbContextOptions => dbContextOptions
               //.UseMySql( "server=mysqlservidor.mysql.database.azure.com;port=3306;database=starwars;uid=servidor@mysqlservidor;password=982666@Lindemberg",
               .UseMySql(conectionString,
               new MySqlServerVersion(new Version(8, 0, 21)),
                       mySqlOptions => mySqlOptions
                           .CharSetBehavior(CharSetBehavior.NeverAppend))
                  // .EnableSensitiveDataLogging()
                   .EnableDetailedErrors()
           );
    

            string chaveDeSeguranca = "school_of_net_manda_muito_bem!"; // Chave de segurança
            var chaveSimetrica = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(chaveDeSeguranca));
            
            // Que vamos usar JWT como forma de autenticação    
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options => {
                // Como o sistema deve ler o nosso Token
                options.TokenValidationParameters = new TokenValidationParameters{
                    ValidateIssuer = true, 
                    ValidateAudience = true,
                    ValidateIssuerSigningKey = true,
                    // Dados de validação de um JWT
                    ValidIssuer = "sonmarket.com",
                    ValidAudience = "usuario_comum",
                    IssuerSigningKey = chaveSimetrica
                };
            });



            services.AddMvc();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "HanSOLO", Version = "v1" });
            });

            services.AddTransient<AutenticatorService, AutenticatorService>();
            services.AddTransient<IUsuarioRepository, UsuarioRepository>();
            services.AddTransient<IAutenticatorRepository, AutenticatorRepository>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "HanSOLO v1"));
            }

            app.UseCors(x => x
           .AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader());

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthentication(); // Isso que aplica o sistema de autenticação na sua aplicação


            app.UseCors();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });



        }
    }
}
