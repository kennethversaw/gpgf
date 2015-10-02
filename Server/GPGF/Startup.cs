using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GPGF.Startup))]
namespace GPGF
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
