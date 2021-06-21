using AlApar.Classes.Job;
using AlApar.Models.Job;
using AlApar.Models.Job.Views;
using AlApar.Repositories.Common;

namespace AlApar.Repositories.Job
{
    public interface IJobCrud : ICommon<ViewJobAds, JobContext, Form, JobAd, JobContact, JobLog>
    {
    }
}
