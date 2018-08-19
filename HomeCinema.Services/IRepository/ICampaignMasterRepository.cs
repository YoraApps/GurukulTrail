using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
   public interface ICampaignMasterRepository
    {
        List<CampaignMasterDs> GetAllCampaignMasterDsRepository();
        CampaignMasterDs GetSingleCampaignMasterDs(int? id);
        bool UpdateCampaignMasterDs(CampaignMasterDs campaignMasterDs);
        bool RemoveCampaignMasterDs (int? id);
    }
}
