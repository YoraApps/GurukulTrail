using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
   public  interface IGroupMasterService
    {
        List<GroupMasterDs> GetAllGroupDetails();
        bool CreateGroupDetails(GroupMasterDs groupMasterDs);
        GroupMasterDs GetGroupDetailId(int? GroupMasterId);
        bool RemoveGroupDetails(int? GroupMasterId);
    }
}
