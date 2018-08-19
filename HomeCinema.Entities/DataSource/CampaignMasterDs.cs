using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
   public class CampaignMasterDs
    {
        public int CampaignId { get; set; }
        public string CampaignName { get; set; }
        public int EmployeeId { get; set; }
        public int BatchId { get; set; }
        public int? ProvenceId { get; set; }
        public int? DistrictId { get; set; }
        public int? CityId { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set;}
        public int? StatusId { get; set; }
        public bool Active { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? ApprovedOn { get; set; }
        public int? ApprovedBy { get; set; }
    }
}
