using Dapper;
using HomeCinema.Entities.DataSource;
using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;



namespace HomeCinema.Services.Repository
{
    public class GroupMasterService : IGroupMasterService
    {
        private IDbConnection _db;
        public GroupMasterService()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulamConStr"].ConnectionString);
        }
        public bool CreateGroupDetails(GroupMasterDs groupMasterDs)
        {
            bool returnvalue = false;
            DynamicParameters param = new DynamicParameters();
            param.Add("@GroupMasterId", groupMasterDs.GroupMasterId);
            param.Add("@GroupCode", groupMasterDs.GroupCode);
            param.Add("@GroupName", groupMasterDs.GroupName);
            param.Add("@UniversityId", groupMasterDs.UniversityId);
            //param.Add("1", groupMasterDs.Active);
            param.Add("@lastupdatedby", groupMasterDs.lastupdatedby);
            param.Add("@lastupdateddt", DateTime.UtcNow);

            var val = _db.Execute("USP_UpdateGroupMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }
            _db.Close();
            return returnvalue;
        }

        public List<GroupMasterDs> GetAllGroupDetails()
        {
            return this._db.Query<GroupMasterDs>("SP_GetGroupMaster", commandType: CommandType.StoredProcedure).ToList();
        }

        public GroupMasterDs GetGroupDetailId(int? GroupMasterId)
        {
            DynamicParameters param = new DynamicParameters();

            param.Add("@GroupMasterId", GroupMasterId);
            return _db.Query<GroupMasterDs>("USP_GetGroupMasterId", param, commandType: CommandType.StoredProcedure).SingleOrDefault();

        }

        public bool RemoveGroupDetails(int? GroupMasterId)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@GroupMasterId", GroupMasterId);
            var val = _db.Execute("USP_RemoveGroupMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }
            _db.Close();
            return returnvalue;
        }


    }
}
