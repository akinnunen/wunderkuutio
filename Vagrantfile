# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "hashicorp/precise64"
  config.vm.box_url = 'http://files.vagrantup.com/precise64.box'

  config.vm.provision 'shell', path: 'scripts/install_ansible.sh'
  config.vm.provision 'shell', path: 'scripts/run_ansible.sh'

end
