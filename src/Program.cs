using System;
using System.Net.Http;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Blazorise;
using Blazorise.Material;
using Blazorise.Icons.Material;
using gitskills.Models;
using gitskills.Github;
using Blazored.LocalStorage;

namespace gitskills
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("#app");

            builder.Services.AddBlazorise(options =>
            {
                options.ChangeTextOnKeyPress = true;
            })
            .AddMaterialProviders()
            .AddMaterialIcons();

            builder.Services.AddSingleton<StateContainer>();

            builder.Services.AddSingleton<ILocalStorageService, LocalStorageService>();
            builder.Services.AddSingleton<ISyncLocalStorageService, LocalStorageService>();

            builder.Services.AddSingleton<GithubService>();

            builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

            var host = builder.Build();

            host.Services
                .UseMaterialProviders()
                .UseMaterialIcons();

            await host.RunAsync();
        }
    }
}
