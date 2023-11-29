# Edits the details

Most of the content of this site is set in the file `config.yaml`.
`hugo` will pull data from this file to generate the site.
Images should be added to the `static/images` directory and 
referenced in the `config.yaml` file as `images/{image-name}.{png or jpg}`

# Generating the site

This site is generated with `hugo``

Run 

``` sh 
hugo
```

to regenerate the site.

# deploy

This site is deployed using GitHub Pages. Static files should be generated and stored in the
`docs/` directory. When commits with changes to the files in `docs/` are pushed to the `main` branch, 
a github action will release the new version of the site.

# Using submodule themes

``` sh
git submodule add themes/{theme}
```
