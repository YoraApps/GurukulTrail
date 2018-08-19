using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HomeCinema.Entities.DataSource;
using System.Data;
using System.Configuration;
using System.Data.SqlClient;
using Dapper;

namespace HomeCinema.Services.Repository
{
  public class DriverMasterRepository : IDriverMasterRepository
  {
    public DateTime now = DateTime.Now;
    private IDbConnection db;
    public DriverMasterRepository()
    {
      db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
    }
    public List<DriverMasterDs> getAllDriverMaster()
    {
      return this.db.Query<DriverMasterDs>("Ysp_GetAllDriverMaster", commandType: CommandType.StoredProcedure).ToList();
    }

    public DriverMasterDs getDriverMasrterById(int? id)
    {
      DynamicParameters param = new DynamicParameters();
      param.Add("@DriverId", id);
      return this.db.Query<DriverMasterDs>("Ysp_GetDriverMasterById", param, commandType: CommandType.StoredProcedure).SingleOrDefault();
    }

    public bool removeDriverMaster(int? id)
    {
      bool returnvalue = false;

      DynamicParameters param = new DynamicParameters();

      param.Add("@DriverId", id);
      db.Open();
      var val = db.Execute("Ysp_DeleteDriverMaster", param, commandType: CommandType.StoredProcedure);

      if (val > 0)
      {
        returnvalue = true;
      }

      db.Close();
      return returnvalue;
    }

    public bool updateDriverMaster(DriverMasterDs driverMasterDs)
    {
      bool returnvalue = false;

      DynamicParameters param = new DynamicParameters();

      param.Add("@DriverId", driverMasterDs.DriverId);
      param.Add("@UniversityId", driverMasterDs.UniversityId);
      param.Add("@DriverName", driverMasterDs.DriverName);
      param.Add("@DriverLicenceNo", driverMasterDs.DriverLicenceNo);
      param.Add("@DriverLicenceExpDate", driverMasterDs.DriverLicenceExpDate);
      param.Add("@DriverMobileNo", driverMasterDs.DriverMobileNo);
      param.Add("@AlternativeContactNo", driverMasterDs.AlternativeContactNo);
      param.Add("@lastupdateddt", DateTime.UtcNow); 
      param.Add("@lastupdatedby", driverMasterDs.lastupdatedby);
      param.Add("@DateofBirth", DateTime.UtcNow);
      param.Add("@ReferenceName", driverMasterDs.ReferenceName);
      param.Add("@ReferenceContactNo", driverMasterDs.ReferenceContactNo);
      param.Add("@Address", driverMasterDs.Address);
      param.Add("@Experience", driverMasterDs.Experience);
      db.Open();
      var val = db.Execute("Ysp_UpdateDriverMaster", param, commandType: CommandType.StoredProcedure);

      if (val > 0)
      {
        returnvalue = true;
      }

      db.Close();
      return returnvalue;
    }
  }
}
