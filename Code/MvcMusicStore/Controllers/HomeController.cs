using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcMusicStore.Domain.Entities;
using MvcMusicStore.Models;

namespace MvcMusicStore.Controllers
{
    public class HomeController : Controller
    {
        private MvcMusicStore.Domain.Entities.MusicDb MusicDb = new MvcMusicStore.Domain.Entities.MusicDb();

        public ActionResult Index()
        {
            
            var res = MusicDb.Album.FirstOrDefault();

            ViewBag.Title = "MvcMusicStore";

            return View();
        }
    }
}
