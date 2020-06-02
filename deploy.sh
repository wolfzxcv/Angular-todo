# build
# if you are deploying to https://<USERNAME>.github.io/<REPO>
# put REPO name between slashes
npx ng build --prod --base-href=/Angular-todo/

# upload to GitHub
npx ngh --no-silent
