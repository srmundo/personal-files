To apply the neovim configurations in your editor you have to copy the files inside this folder in the directory `/home/srmundo/.config/nvim`

## Pre-installed plugins:
* To install the plugins built into init.vim you have to first install the plugin manager
`vim-plug` you can use this script to install it: 
`curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim`, 

* Note:
You must have previously installed `curl`.

But with this the plugin is not installed yet, you must reload your `init.vim` by running :so `~/.config/nvim/init.vim`. And then run `:PlugInstall`. 
A window will appear with the installation progress, when the plugin is finished installing, close it by pressing q.

Now yes, the plugin will be installed, if you want to disable it, just comment or delete that line. 
But this will not remove the plugin from your drive, to do so run the `:PlugClean` command.

It's important to keep your plugins up to date, so from time to time run `:PlugUpdate` to update them.

Keeping your plugin manager up to date is also important, you can do that with `:PlugUpgrade`.
