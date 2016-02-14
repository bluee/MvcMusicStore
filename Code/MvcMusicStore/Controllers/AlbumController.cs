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
    public class AlbumController : ApiController
    {
        private MvcMusicStore.Domain.Entities.MusicDb MusicDb = new MvcMusicStore.Domain.Entities.MusicDb();

        // GET api/<controller>
        public IEnumerable<AlbumDTO> Get()
        {
            var albums = from c in MusicDb.Album
                         select new AlbumDTO
                         {
                             AlbumId = c.AlbumId,
                             Title = c.Title,
                             Genre = c.Genre.Name,
                             Artist = c.Artist.Name,
                             Price = c.Price
                         };

            return albums;
        }


        // POST api/<controller>
        public HttpResponseMessage Post([FromBody]AlbumCreateDTO value)
        {
            if (ModelState.IsValid)
            {
                MusicDb.Album.Add(new Domain.Entities.Album
                {
                    GenreId = value.GenreId,
                    ArtistId = value.ArtistId,
                    Title = value.Title,
                    Price = value.Price
                });
                MusicDb.SaveChanges();
                
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                //Improvement: Return list of errors
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

        }

    }
}