#!/bin/bash

if [ ! -f /usr/bin/ansible ]; then

	apt-get -y install software-properties-common
	apt-add-repository ppa:ansible/ansible
	apt-get update
	apt-get -y install ansible

fi