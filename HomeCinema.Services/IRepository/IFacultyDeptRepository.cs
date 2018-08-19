using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
   public interface IFacultyDeptRepository
  {
    List<FacultyDeptDs> getAllFacultyDept();
    bool updateFacultyDept(FacultyDeptDs facultyDeptDs);
    bool removeFacultyDept(int? id);
    FacultyDeptDs getFacultyDeptById(int? id);
  }
}
