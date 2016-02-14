using MvcMusicStore.Domain.DTO;
using MvcMusicStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MvcMusicStore.Controllers
{
    [AllowAnonymous]
    public class GenreController : ApiController
    {
        private MvcMusicStore.Domain.Entities.MusicDb MusicDb = new MvcMusicStore.Domain.Entities.MusicDb();

        // GET api/<controller>
        public IEnumerable<GenreDTO> Get()
        {
            var genre = from c in MusicDb.Genre
                          select new GenreDTO
                          {
                              GenreId = c.GenreId,
                              Name = c.Name,
                              Description = c.Description
                          };

            return genre.OrderBy(p => p.Name);
        }

      
    }
}