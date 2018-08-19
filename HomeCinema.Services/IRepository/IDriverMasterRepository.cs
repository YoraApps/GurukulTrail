using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
  public interface IDriverMasterRepository
  {
    List<DriverMasterDs> getAllDriverMaster();
    bool updateDriverMaster(DriverMasterDs driverMasterDs);
    bool removeDriverMaster(int? id);
    DriverMasterDs getDriverMasrterById(int? id);
  }
}
