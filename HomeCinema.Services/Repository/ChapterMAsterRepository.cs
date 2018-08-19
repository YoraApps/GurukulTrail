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
  public class ChapterMAsterRepository : IChapterMAsterRepository
  {
    public DateTime now = DateTime.Now;
    private IDbConnection db;
    public ChapterMAsterRepository()
    {
      db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
    }
    public List<ChapterMasterDs> GetAllChapterMaster()
    {
      return this.db.Query<ChapterMasterDs>("Ysp_GetAllChapterMaster", commandType: CommandType.StoredProcedure).ToList();     
    }

    public ChapterMasterDs GetChapterMasterById(int? Id)
    {
      DynamicParameters param = new DynamicParameters();
      param.Add("@ChapterId", Id);
      return this.db.Query<ChapterMasterDs>("Ysp_GetChapterMasterById", param, commandType: CommandType.StoredProcedure).SingleOrDefault();
    }

    public bool RemoveChapterMaster(int? id)
    {
      bool returnvalue = false;
      DynamicParameters param = new DynamicParameters();
      param.Add("@ChapterId", id);
      db.Open();
      var val = db.Execute("Ysp_DeleteChapterMaster", param, commandType: CommandType.StoredProcedure);

      if (val > 0)
      {
        returnvalue = true;
      }

      db.Close();
      return returnvalue;
    }

    public bool UpdateChapterMaster(ChapterMasterDs chapterMasterDs)
    {
      bool returnvalue = false;
      DynamicParameters param = new DynamicParameters();
      param.Add("@ChapterId",chapterMasterDs.ChapterId);
      param.Add("@ChapterNumber", chapterMasterDs.ChapterNumber);
      param.Add("@ChapterTitle", chapterMasterDs.ChapterTitle);
      param.Add("@ModeOfTeaching", chapterMasterDs.ModeOfTeaching);
      param.Add("@ChapterDetails", chapterMasterDs.ChapterDetails);
      param.Add("@SKS", chapterMasterDs.SKS);
      param.Add("@UniversityId", chapterMasterDs.UniversityId);
      param.Add("@lastupdateddt",DateTime.UtcNow);
      param.Add("@lastupdatedby", chapterMasterDs.lastupdatedby);
      db.Open();
      var val = db.Execute("Ysp_UpdateChapterMaster", param, commandType: CommandType.StoredProcedure);

      if (val > 0)
      {
        returnvalue = true;
      }

      db.Close();
      return returnvalue;
    }

  }
  }

