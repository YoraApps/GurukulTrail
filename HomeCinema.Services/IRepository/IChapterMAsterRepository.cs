using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
  public interface IChapterMAsterRepository
  {
    List<ChapterMasterDs> GetAllChapterMaster();
    ChapterMasterDs GetChapterMasterById(int? Id);
    bool UpdateChapterMaster(ChapterMasterDs chapterMasterDs);
    bool RemoveChapterMaster(int? id);
  }
}
