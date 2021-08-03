# Contributing

Thanks for contributing to **components-extra**!

## Conventions

### Branch name

No specific rule here. However, always nice to follow the `feature/[name]` practice.

### PR name

No specific rule here either. But if you can, you can prefix the name with the scope of your change.
Example: `[CookiesBanner]: fix broken button`

### Commit

Please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) standards.

## Development

### Run the dev server

If your are making a fix to a component or creating a new one, you can visualize your changes live by using
the local doc server:

```shell
yarn start
```

The stories are located under the package `docs/`.

> **Note**: if you are using a linux distribution, you might need to increase the system file watch limit. If you encounter an error like _Error: UNHANDLED REJECTION ENOSPC: System limit for number of file watchers reached_, just run the following command and try again: `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`.

### Test pipeline

Once you're done with your work, you can validate all the test pipelines with:

```
yarn validate
```

If all checks are OK, then you're all good to submit a PR! :)
