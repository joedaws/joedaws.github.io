# Generating the site

This site is generated with org-mode. Use the =org-publish= function in
emacs. 

# Emacs configuration

``` elisp
;; Org Project publish
(after! org
  (setq org-publish-project-alist
        '(("joedaws-github-io"
           :base-directory "~/Sync/joedaws-github-io/"
           :base-extension "org"
           :publishing-directory "~/Sync/joedaws-github-io/public"
           :publishing-function org-html-publish-to-html
           :recursive t
           :section-numbers nil
           :html-head-extra "
<link rel=\"icon\" type=\"image/svg+xml\" href=\"./img/crow.svg\">
<link rel=\"stylesheet\" type=\"text/css\" href=\"stylesheet.css\"
<script src=\"script.js\"></script>
"
           :html-postamble "
<footer>
  <p>&copy; 2024 My Blog. All rights reserved.</p>
  <p>
    <a href=\"mailto:daws.joseph@gmail.com\">Contact</a> |
    <a href=\"https://www.linkedin.com/in/joseph-daws-1a8b33183/\" target=\"_blank\">
      <img src=\"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg\" alt=\"LinkedIn\" style=\"width:20px; height:20px; vertical-align:middle; margin-left:5px;\">
    </a>
  </p>
</footer>
")
          ("joedaws-github-io-static"
           :base-directory "~/Sync/joedaws-github-io/"
           :base-extension "css\\|js\\|png\\|jpg\\|gif\\|pdf\\|mp3\\|ogg\\|swf\\|svg"
           :publishing-directory "~/Sync/joedaws-github-io/public"
           :recursive t
           :publishing-function org-publish-attachment
           ))))
```


# deploy

This site is deployed using GitHub Pages. Static files should be generated and stored in the
`public/` directory. When commits with changes to the files in `public/` are pushed to the `main` branch, 
a github action will release the new version of the site.
