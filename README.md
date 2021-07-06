# Nty

## Presentation

*Nty* is a *Team Management tool* for groups of fewer than 100 members. 100 members is not an hard limit. It is just the number we can have in mind when we think about use cases. It comes as complementary to *Project or Product Management tools*. It uses a *git repository* to exchange the data. So the data, that you store in *Nty*, are open and distributed to the complete team.

This repository is the first draft of *Nty*. The intention is to distribute *Nty* as *npm package*.

Ideally, *Nty* should be usable as *CLI*, *TUI* (a.k.a. *text-based UI* or *terminal-UI*), *GUI* or *Web-UI* (a.k.a. local *web-server*) as [git-bug](https://github.com/MichaelMure/git-bug).


## Getting started

### Using Nty

In a bash terminal:

    mkdir myteam
    cd myteam
    mpm init -y
    npm i nty
    npx nty
    npx nty_web_ui


### Developing Nty

In a bash terminal:

    git clone https://github.com/charlyoleg/nty
    cd nty
    npm install
    npm run
    npm run install_py
    npm run docs
    npm run clean_js
    npm run build_js
    bin/nty_cli.js --help


For the web-ui:

    npm run clean_web_ui
    npm run build_web_ui
    npm run run_web_server
    # or alternatively
    npm run start_web_server


