using Dapper;
using HomeCinema.Entities.DataSource;
using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.Repository
{
    public class ClubMasterRepository : IClubMasterRepository
    {
        private IDbConnection db;
        public ClubMasterRepository()
        {
            db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
        }
        public List<ClubMaster> GetAllClubMasterRepository()
        {
            return this.db.Query<ClubMaster>("Ysp_GetAllClubMaster", commandType: CommandType.StoredProcedure).ToList();
        }

        public ClubMaster getClubMasterId(int ClubId)
        {
            DynamicParameters param = new DynamicParameters();

            param.Add("@ClubId", ClubId);
            return this.db.Query<ClubMaster>("Ysp_GetClubSingleId", param, commandType: CommandType.StoredProcedure).SingleOrDefault();
        }

        public bool RemoveClubMaster(int? id)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@ClubId", id);
            db.Open();
            var val = db.Execute("Ysp_RemoveClubMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            db.Close();
            return returnvalue;
        }

        public bool UpdateClubMaster(ClubMaster clubMaster)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@ClubId", clubMaster.ClubId);
            param.Add("@ClubName", clubMaster.ClubName);
            param.Add("@ClubDescription", clubMaster.ClubDescription);
            param.Add("@active", 1);
            param.Add("@lastupdateddt", DateTime.UtcNow);
            param.Add("@lastupdatedby", clubMaster.lastupdatedby);


            db.Open();
            var val = db.Execute("Ysp_CreateClubMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            db.Close();
            return returnvalue;
        }
    }
}
