using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
  public class ClassRoomMasterDs
  {
    public int Class_Id { get; set; }
    public int UniversityId { get; set; }
    public string Class_Name { get; set; }
    public bool Active { get; set; }
    public string Created_By { get; set; }
    public DateTime Created_On { get; set; }
    public string Created_Ip { get; set; }
  }
}
