"use strict";

import * as async from "async";
import * as request from "request";
import * as GitHub from "github";
import { Response, Request, NextFunction } from "express";


/**
 * GET /api
 * List of API examples.
 */
export let getApi = (req: Request, res: Response) => {
  res.render("api/index", {
    title: "API Examples"
  });
};

/**
 * GET /api/github
 * Github API example.
 */
/*export let getGithub = (req: Request, res: Response, next: NextFunction) => {
  const token = req.user.tokens.find((token: any) => token.kind === "github");
  GitHub.setAccessToken(token.accessToken);
  GitHub.get(`${req.user.github}?fields=id,name,email,first_name,last_name,gender,link,locale,timezone`, (err: Error, results: GitHub.GithubUser) => {
    if (err) { return next(err); }
    res.render("api/github", {
      title: "Github API",
      profile: results
    });
  });
};*/
