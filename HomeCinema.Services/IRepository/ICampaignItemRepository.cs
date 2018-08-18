using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface ICampaignItemRepository
    {
        List<CampaignItemDs> GetAllCampaignItem();
        bool UpdateCampaignItem(CampaignItemDs campaignItemDs);
        CampaignItemDs GetByCampaignItemId(int? CampaignItemId);
    }
}
