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
    public class CampaignMasterRepository: ICampaignMasterRepository
    {
        private IDbConnection _db;
        public CampaignMasterRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
        }

        public List<CampaignMasterDs> GetAllCampaignMasterDsRepository()
        {
            return this._db.Query<CampaignMasterDs>("YSP_GetAllCampaignMaster", commandType: CommandType.StoredProcedure).ToList();
        }

        public CampaignMasterDs GetSingleCampaignMasterDs(int? id)
        {
            DynamicParameters param = new DynamicParameters();
            param.Add("@CampaignId", id);

            return _db.Query<CampaignMasterDs>("YSP_SingleCampaignMaster", param, commandType: CommandType.StoredProcedure).SingleOrDefault();

        }

        public bool RemoveCampaignMasterDs(int? id)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@CampaignId", id);
            _db.Open();
            var val = _db.Execute("YSP_RemoveCampaignMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            _db.Close();
            return returnvalue;
        }

        public bool UpdateCampaignMasterDs(CampaignMasterDs campaignMasterDs)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@CampaignId", campaignMasterDs.BatchId);
            param.Add("@CampaignName", campaignMasterDs.CampaignName);
            param.Add("@EmployeeId", campaignMasterDs.EmployeeId);
            param.Add("@BatchId", campaignMasterDs.BatchId);
            param.Add("@ProvenceId", campaignMasterDs.ProvenceId);
            param.Add("@DistrictId", campaignMasterDs.DistrictId);
            param.Add("@CityId", campaignMasterDs.CityId);
            param.Add("@FromDate", DateTime.UtcNow);
            param.Add("@ToDate", DateTime.UtcNow);
            param.Add("@StatusId", campaignMasterDs.StatusId);
            param.Add("@Active", 1);
            param.Add("@UpdatedOn", DateTime.UtcNow);
            param.Add("@UpdatedBy", 1);
            param.Add("@ApprovedOn", DateTime.UtcNow);
            param.Add("@ApprovedBy", 1);


            _db.Open();
            var val = _db.Execute("YSP_UpdateCampaignMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            _db.Close();
            return returnvalue;
        }
    }
}
