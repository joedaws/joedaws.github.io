# Generating the site

This site is generated with org-mode. Use the =org-publish= function in
emacs. 

# Doom Emacs configuration

I use doom emacs to work on this project. There is custom per-project based 
configuration for doom-emacs (which sets variables for org mode and publishing
org files) in the `.dir-locals.el` file in this repository. Doom emacs will
ask if it's okay to use the variables on the first load. You can use `!` to 
mark them as safe.

# deploy

This site is deployed using GitHub Pages. Static files should be generated and stored in the
`public/` directory. When commits with changes to the files in `public/` are pushed to the `main` branch, 
a github action will release the new version of the site.
