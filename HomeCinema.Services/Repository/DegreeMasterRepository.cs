using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HomeCinema.Entities.DataSource;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Dapper;

namespace HomeCinema.Services.Repository
{
  public class DegreeMasterRepository : IDegreeMasterRepository
  {
    private IDbConnection _db;
    public DegreeMasterRepository()
    {
      _db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
    }
    public List<DegreeMasterDs> GetAllDegreeMasterRepository()
    {
      return this._db.Query<DegreeMasterDs>("YSP_GetDegreeMaster", commandType: CommandType.StoredProcedure).ToList();
    }

    public DegreeMasterDs GetSingleDegreeMaster(int? DegreeId)
    {
      DynamicParameters param = new DynamicParameters();
      param.Add("@DegreeId", DegreeId);

      return _db.Query<DegreeMasterDs>("YSP_GetDegreeMasterId", param, commandType: CommandType.StoredProcedure).SingleOrDefault();

    }

    public bool RemoveDegreeMaster(int? DegreeId)
    {
      bool returnvalue = false;

      DynamicParameters param = new DynamicParameters();

      param.Add("@DegreeId", DegreeId);
      _db.Open();
      var val = _db.Execute("YSP_RemoveDegreeMaster", param, commandType: CommandType.StoredProcedure);

      if (val > 0)
      {
        returnvalue = true;
      }

      _db.Close();
      return returnvalue;
    }

    public bool UpdateDegreeMaster(DegreeMasterDs degreeMasterDs)
    {
      bool returnvalue = false;

      DynamicParameters param = new DynamicParameters();

      param.Add("@DegreeId", degreeMasterDs.DegreeId);
      param.Add("@DegreeCode", degreeMasterDs.DegreeCode);
      param.Add("@DegreeName", degreeMasterDs.DegreeName);
    
      _db.Open();
      var val = _db.Execute("YSP_UpdateDegreeMaster", param, commandType: CommandType.StoredProcedure);

      if (val > 0)
      {
        returnvalue = true;
      }

      _db.Close();
      return returnvalue;
    }
  }
}
