using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
    public class VehicleMasterDs
    {
        public int UniversityId { get; set; }
        public int VehicleId{ get; set; }
        public string RegistrationNumber { get; set; }
        public string Description { get; set; }
        public string OwnerNumber { get; set; }
        public string WeightCapacity { get; set; }
        public string VehicleStatus { get; set; }
        public DateTime RegistrationDate { get; set; }
        public string InsuranceDetails { get; set; }       
        public DateTime InsuranceExpiryDate { get; set; }
        public bool Active { get; set; }
        public DateTime lastupdateddt { get; set; }
        public int lastupdatedby { get; set; } 

    }
    
}
