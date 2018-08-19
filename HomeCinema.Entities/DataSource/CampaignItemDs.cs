using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
    public class CampaignItemDs
    {
        public int CampaignItemId { get; set; }
        public int CampaignId { get; set; }
        public string ItemName { get; set; }
        public double Price { get; set; }
        public string Remarks { get; set; }
        
   

    }
}
