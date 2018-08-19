using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
  public class DriverMasterDs
  {
       public int DriverId { get; set; }
       public int UniversityId { get; set; }
       public string DriverName { get; set; }
       public string DriverLicenceNo { get; set; }
       public string DriverLicenceExpDate { get; set; }
       public string DriverMobileNo { get; set; }
       public string AlternativeContactNo { get; set; }
       public DateTime lastupdateddt { get; set; }
       public int? lastupdatedby { get; set; }
       public DateTime DateofBirth { get; set; }
       public string ReferenceName { get; set; }
       public string ReferenceContactNo { get; set; }
       public string Address { get; set; }
       public string Experience { get; set; }
    
  }
}
