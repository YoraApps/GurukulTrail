using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HomeCinema.Entities.DataSource;
using Dapper;

namespace HomeCinema.Services.Repository
{
  public class ClassRoomMasterepository : IClassRoomMasterRepository
  {
    public DateTime now = DateTime.Now;
    private IDbConnection _db;
    public ClassRoomMasterepository()
    {
      _db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
    }

    public List<ClassRoomMasterDs> getAllClassRoomMater()
    {
      return this._db.Query<ClassRoomMasterDs>("Ysp_getAllClassMaster", commandType: CommandType.StoredProcedure).ToList();      
    }

    public ClassRoomMasterDs getClassRoomMasterById(int? id)
    {
      DynamicParameters param = new DynamicParameters();

      param.Add("@Id", id);
      return this._db.Query<ClassRoomMasterDs>("Ysp_ClassRoomMasterById", param,commandType: CommandType.StoredProcedure).SingleOrDefault();
    }

    public bool removeClassMaster(int? id)
    {

      bool returnvalue = false;

     DynamicParameters param = new DynamicParameters();

     param.Add("@Class_Id", id);
      _db.Open();
      var val = _db.Execute("Ysp_DeleteClassMaster", param, commandType: CommandType.StoredProcedure);

      if (val > 0)
      {
        returnvalue = true;
      }

      _db.Close();
      return returnvalue;
    }

    public bool updateClassMater(ClassRoomMasterDs classRoomMasterDs)
    {
      bool returnvalue = false;

      DynamicParameters param = new DynamicParameters();

      param.Add("@Class_Id", classRoomMasterDs.Class_Id);
      param.Add("@UniversityId ", classRoomMasterDs.UniversityId);
      param.Add("@Class_Name", classRoomMasterDs.Class_Name);
      param.Add("@Active", 1);
      param.Add("@Created_By", classRoomMasterDs.Created_By);
      param.Add("@Created_On",DateTime.UtcNow);    
      param.Add("@Created_Ip", classRoomMasterDs.Created_Ip);
      _db.Open();      
      var val = _db.Execute("Ysp_UpdateClassMaster", param, commandType: CommandType.StoredProcedure);

      if (val > 0)
      {
        returnvalue = true;
      }

      _db.Close();
      return returnvalue;
    }
  }
}
