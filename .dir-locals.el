((nil . ((eval . (progn
                   ;; Org-publish configuration for this project
                   (setq-local org-publish-project-alist
                               '(("joedaws-github-io-content"
                                  :base-directory "~/dev/projects/joedaws.github.io/"
                                  :base-extension "org"
                                  :publishing-directory "~/dev/projects/joedaws.github.io/docs/"
                                  :publishing-function org-html-publish-to-html
                                  :recursive t
                                  :section-numbers nil
                                  :html-head-extra "
<link rel=\"icon\" type=\"image/svg+xml\" href=\"img/crow.svg\">
<link rel=\"stylesheet\" type=\"text/css\" href=\"stylesheet.css\">
<script src=\"script.js\"></script>
"
                                  :html-postamble "
<footer>
  <p>Joseph Daws, Jr. &copy; 2024</p>
  <p>
    <a href=\"mailto:daws.joseph@gmail.com\">Contact</a> |
    <a href=\"https://www.linkedin.com/in/joseph-daws-1a8b33183/\" target=\"_blank\">
      <img src=\"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg\" alt=\"LinkedIn\" style=\"width:20px; height:20px; vertical-align:middle; margin-left:5px;\">
    </a>
  </p>
</footer>
")))

                   ;; Auto-revert for HTML buffers
                   (defun auto-revert-html-buffer ()
                     (when (and buffer-file-name
                                (string-equal (file-name-extension buffer-file-name) "html"))
                       (auto-revert-mode 1)))
                   (add-hook 'find-file-hook #'auto-revert-html-buffer)

                   ;; Refresh HTML buffer after publishing
                   (defun org-publish-refresh-html (_plist _project)
                     "Refresh the HTML buffer if it is open after publishing."
                     (let ((html-file (org-publish-get-target-file (buffer-file-name) 'html)))
                       (when (get-file-buffer html-file)
                         (with-current-buffer (get-file-buffer html-file)
                           (revert-buffer t t t)))))
                   (add-hook 'org-publish-after-publishing-hook #'org-publish-refresh-html))))))
