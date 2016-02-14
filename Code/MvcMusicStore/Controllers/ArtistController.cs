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
    public class ArtistController : ApiController
    {
        private MvcMusicStore.Domain.Entities.MusicDb MusicDb = new MvcMusicStore.Domain.Entities.MusicDb();

        // GET api/<controller>
        public IEnumerable<ArtistDTO> Get()
        {
            var artists = from c in MusicDb.Artist
                          select new ArtistDTO
                          {
                              ArtistId = c.ArtistId,
                              Name = c.Name
                          };

            return artists.OrderBy(p => p.Name);
        }

      
    }
}