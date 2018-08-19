using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface IDepartmentMasterRepository
    {
        List<DepartmentMaster> GetAllDepartmentMasterRepository();
        DepartmentMaster getDepartmentMasterId(int DepartmentId);
        bool UpdateDepartmentMaster(DepartmentMaster departmentMaster);
        bool RemoveDepartmentMaster(int? id);
    }
}
