﻿using RLC_Portfolio_MVC.App_Start;
using RLC_Portfolio_MVC.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace RLC_Portfolio_MVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GridDemo()
        {
            ViewBag.Message = "Your grid demo page.";

            return View();
        }

        // GET: Exercises
        public ActionResult JSBasics()
        {
            return View();
        }   

        public ActionResult Contact()
        {
            EmailModel model = new EmailModel();
            return View(model);
        }
       
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(EmailModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var body = "<p>Email From: <bold>{0}</bold> ({ 1})</ p >< p > Message:</ p >< p >{ 2}</ p > ";
                    var from = "MyPortfolio<example@email.com>";
                    model.Body = "This is a message from your portfolio site.  The name and the email of the contacting person is above.";
                    var email = new MailMessage(from, ConfigurationManager.AppSettings["emailto"])
                    {
                        Subject = "Portfolio Contact Email",
                        Body = string.Format(body, model.FromName, model.FromEmail, model.Body),
                        IsBodyHtml = true
                    };
                    var svc = new PersonalEmail();
                    await svc.SendAsync(email);
                    return View(new EmailModel());
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await Task.FromResult(0);
                }
            }
            return View(model);
        }
    }
}