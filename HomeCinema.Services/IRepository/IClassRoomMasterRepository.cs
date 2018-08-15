using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
  public interface IClassRoomMasterRepository
  {
    List<ClassRoomMasterDs> getAllClassRoomMater();
    ClassRoomMasterDs getClassRoomMasterById(int? id);
    bool updateClassMater(ClassRoomMasterDs classRoomMasterDs);
    bool removeClassMaster(int? id);
  }
}
