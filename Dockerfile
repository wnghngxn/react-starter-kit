FROM golang:latest
ARG PROXY=--registry=https://registry.npm.taobao.org
RUN sed -i "s@http://deb.debian.org@https://mirrors.aliyun.com@g" /etc/apt/sources.list
#ADD .ssh /root/.ssh/
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get clean && apt-get update && apt-get upgrade -y
RUN APT_INSTALL="apt-get install -y --no-install-recommends" && apt-get update && $APT_INSTALL vim git tig npm && npm install -g n ${PROXY}
RUN n lts && npm install -g npm yarn yrm ${PROXY} && yrm use taobao
RUN APT_INSTALL="apt-get install -y --no-install-recommends" && apt-get update && $APT_INSTALL tmux zsh autojump silversearcher-ag
RUN echo ". /usr/share/autojump/autojump.sh" >> $HOME/.zshrc && echo "export PS1='#'" >> $HOME/.zshrc
#RUN sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
#RUN git clone https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh && cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc && chsh -s /bin/zsh
RUN ["zsh", "-ic", "source $HOME/.zshrc"]
#ADD sources.list /etc/opt/
RUN apt-get clean && apt-get update && apt-get upgrade -y
RUN ldconfig && apt-get clean && apt-get autoremove && rm -rf /var/lib/apt/lists/* /tmp/* ~/*
CMD ["/bin/zsh"]