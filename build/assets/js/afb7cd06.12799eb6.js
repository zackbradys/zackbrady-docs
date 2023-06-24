"use strict";(self.webpackChunkzackbrady_docs=self.webpackChunkzackbrady_docs||[]).push([[8904],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(m,s(s({ref:t},h),{},{components:r})):n.createElement(m,s({ref:t},h))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Rancher Effortless"},s="Effortless Deployment of Rancher RKE2, Rancher Manager, Longhorn, and Neuvector",l={unversionedId:"rancher-effortless/README",id:"version-0.1.0/rancher-effortless/README",title:"Effortless Deployment of Rancher RKE2, Rancher Manager, Longhorn, and Neuvector",description:"rancher-long-banner",source:"@site/versioned_docs/version-0.1.0/rancher-effortless/README.md",sourceDirName:"rancher-effortless",slug:"/rancher-effortless/",permalink:"/docs/0.1.0/rancher-effortless/",draft:!1,editUrl:"https://github.com/zackbradys/zackbrady-docs/docs/versioned_docs/version-0.1.0/rancher-effortless/README.md",tags:[],version:"0.1.0",frontMatter:{sidebar_label:"Rancher Effortless"},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/docs/0.1.0/tutorial-extras/translate-your-site"}},i={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"About Me",id:"about-me",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Welcome to the Effortless Rancher Installation Guide",id:"welcome-to-the-effortless-rancher-installation-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Infrastructure",id:"infrastructure",level:2},{value:"Rancher RKE2",id:"rancher-rke2",level:2},{value:"RKE2 Control Node",id:"rke2-control-node",level:3},{value:"RKE2 Worker Nodes",id:"rke2-worker-nodes",level:3},{value:"Rancher Multi Cluster Manager",id:"rancher-multi-cluster-manager",level:2},{value:"Exploring the Rancher Manager",id:"exploring-the-rancher-manager",level:3},{value:"Rancher Longhorn",id:"rancher-longhorn",level:2},{value:"Exploring Rancher Longhorn",id:"exploring-rancher-longhorn",level:3},{value:"Rancher NeuVector",id:"rancher-neuvector",level:2},{value:"Exploring Rancher NeuVector",id:"exploring-rancher-neuvector",level:3},{value:"Final Thoughts",id:"final-thoughts",level:2}],h={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"effortless-deployment-of-rancher-rke2-rancher-manager-longhorn-and-neuvector"},"Effortless Deployment of Rancher RKE2, Rancher Manager, Longhorn, and Neuvector"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-long-banner",src:r(4988).Z,width:"3000",height:"1000"})),(0,a.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#about-me"},"About Me")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#infrastructure"},"Infrastructure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rancher-rke2"},"Rancher RKE2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rancher-multi-cluster-manager"},"Rancher Multi Cluster Manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rancher-longhorn"},"Rancher Longhorn")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rancher-neuvector"},"Rancher NeuVector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#final-thoughts"},"Final Thoughts"))),(0,a.kt)("h2",{id:"about-me"},"About Me"),(0,a.kt)("p",null,"A little bit about me, my history, and what I've done in the industry. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DOD/IC Contractor"),(0,a.kt)("li",{parentName:"ul"},"U.S. Military Veteran"),(0,a.kt)("li",{parentName:"ul"},"Open-Source Contributor"),(0,a.kt)("li",{parentName:"ul"},"Built and Exited a Digital Firm"),(0,a.kt)("li",{parentName:"ul"},"Active Volunteer Firefighter/EMT")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("h3",{id:"welcome-to-the-effortless-rancher-installation-guide"},"Welcome to the Effortless Rancher Installation Guide"),(0,a.kt)("p",null,"In this deployment guide, we will be installing the entire Rancher Stack to include the following products:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RKE2 (Kubernetes Engine) - ",(0,a.kt)("a",{parentName:"li",href:"https://www.rancher.com/products/rke"},"click learn more")),(0,a.kt)("li",{parentName:"ul"},"Rancher MCM (Cluster Management) - ",(0,a.kt)("a",{parentName:"li",href:"https://www.rancher.com/products/rancher"},"click to learn more")),(0,a.kt)("li",{parentName:"ul"},"Longhorn (Storage) - ",(0,a.kt)("a",{parentName:"li",href:"https://www.rancher.com/products/longhorn"},"click to learn more")),(0,a.kt)("li",{parentName:"ul"},"Neuvector (Security) - ",(0,a.kt)("a",{parentName:"li",href:"https://ranchergovernment.com/neuvector"},"click to learn more")),(0,a.kt)("li",{parentName:"ul"},"and various minor tools/dependencies (more info below)")),(0,a.kt)("p",null,"If you would like to watch the video for this guide, please check it out ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/@zackbradys"},(0,a.kt)("strong",{parentName:"a"},"here")),"."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Three (3) Internet Connected Linux Servers"),(0,a.kt)("li",{parentName:"ul"},"Terminal Utility (Terminal, VSCode, Termius etc...)")),(0,a.kt)("h2",{id:"infrastructure"},"Infrastructure"),(0,a.kt)("p",null,"For this deployment, we need three linux servers to be able to get everything up and running. I will be using three virtualized Rocky Linux 9.1 servers, provisioned by ",(0,a.kt)("a",{parentName:"p",href:"https://harvesterhci.io"},"Rancher Harvester"),". Any linux distribution should work perfectly fine, as long as there is network connectivity. Here's a list of our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/requirements#operating-systems"},"supported operating systems"),". In order to configure these servers for Rancher, we will need these servers to be internet connected and accessible from your local device via ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh"),". "),(0,a.kt)("p",null,"If you would like to see my guide for an airgapped/offline installation, please check out my guide ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zackbradys/rancher-offline"},"here"),". If you would like to see a great Reference Architecture, please check out my co-workers guide ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/clemenko/rancher-ref-arch"},"here"),". Thank you ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/clemenko"},"@clemenko"),"!"),(0,a.kt)("p",null,"Here's an overview the architecture that we will be using for this deployment guide:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-harvester-vm-overview",src:r(3195).Z,width:"2960",height:"432"})),(0,a.kt)("p",null,"Let's run the following commands on each of the nodes to ensure they have the neccessary packages. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'### server(s): rke2-cp-01, rke2-wk-01, and rke2-wk-02\n### Install Packages\nyum install -y zip zstd tree jq cryptsetup\nyum --setopt=tsflags=noscripts install -y nfs-utils\nyum --setopt=tsflags=noscripts install -y iscsi-initiator-utils && echo "InitiatorName=$(/sbin/iscsi-iname)" > /etc/iscsi/initiatorname.iscsi && systemctl enable --now iscsid\n\nyum update -y && yum clean all\n')),(0,a.kt)("h2",{id:"rancher-rke2"},"Rancher RKE2"),(0,a.kt)("p",null,"In order to configure and install Rancher RKE2, you need to have Control/Server nodes and Worker/Agent nodes. We will start by setting up the Control/Server node and then setting up the Worker/Agent nodes. There are many ways to accomplish this and this guide is meant for an effortless and minimal installation, please review the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io"},"rke2 docs")," for more information."),(0,a.kt)("h3",{id:"rke2-control-node"},"RKE2 Control Node"),(0,a.kt)("p",null,"Let's start by configuring the RKE2 Control/Server Node, by adding the configuration file. Since we are completing a effortless installation, we are only adding the RKE2 Token configuration option. I'm using ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," to access the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-cp-01")," server."),(0,a.kt)("p",null,"If you would like to see more ways to configure the RKE2 Control/Server, please check out the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/reference/server_config"},"rke2 server docs"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### server(s): rke2-cp-01\n### Create the RKE2 Directory\nmkdir -p /etc/rancher/rke2/ \n\n### Create the RKE2 Configuration File\ncat << EOF >> /etc/rancher/rke2/config.yaml\ntoken: rke2SecurePassword\nEOF\n")),(0,a.kt)("p",null,"Now that the configuration file is completed, let's install and start the RKE2 Control/Server Node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### server(s): rke2-cp-01\n### Download the RKE2 Control/Server Binary\ncurl -sfL https://get.rke2.io | INSTALL_RKE2_CHANNEL=v1.24 INSTALL_RKE2_TYPE=server sh - \n\n### Start the RKE2 Control/Server Service\nsystemctl enable rke2-server.service && systemctl start rke2-server.service\n")),(0,a.kt)("p",null,"Let's verify that the RKE2 Control/Server is running using ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl status rke2-server"),". It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-rke2-cp-01-systemctl",src:r(7789).Z,width:"2950",height:"252"})),(0,a.kt)("p",null,"Now that we see that the RKE2 Control/Server is running, let's verify it using ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### server(s): rke2-cp-01\n### Symlink kubectl and containerd\nsudo ln -s /var/lib/rancher/rke2/data/v1*/bin/kubectl /usr/bin/kubectl\nsudo ln -s /var/run/k3s/containerd/containerd.sock /var/run/containerd/containerd.sock\n\n### Update your paths in bashrc\ncat << EOF >> ~/.bashrc\nexport KUBECONFIG=/etc/rancher/rke2/rke2.yaml \nexport PATH=$PATH:/var/lib/rancher/rke2/bin:/usr/local/bin/\nEOF\nsource ~/.bashrc\n\n### Verify status with kubectl\nkubectl get nodes\n")),(0,a.kt)("p",null,"It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-rke2-cp-01-kubectl",src:r(5308).Z,width:"2950",height:"132"})),(0,a.kt)("h3",{id:"rke2-worker-nodes"},"RKE2 Worker Nodes"),(0,a.kt)("p",null,"Again, let's start by configuring the RKE2 Worker/Agent Nodes, by adding the configuration file. Since we are completing a effortless installation, we are only adding the RKE2 Server and RKE2 Token configuration options. I'm using ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," to access the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-wk-01")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-wk-02")," servers."),(0,a.kt)("p",null,"If you woud like to see more ways to configure the RKE2 Worker/Agent, please check out the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/reference/linux_agent_config"},"rke2 agent docs"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: You need to complete each of these steps on each worker/agent server.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### server(s): rke2-wk-01 and rke2-wk-02\n### Create the RKE2 Directory\nmkdir -p /etc/rancher/rke2/ \n\n### Create the RKE2 Configuration File\ncat << EOF >> /etc/rancher/rke2/config.yaml\nserver: https://10.0.0.15:9345\ntoken: rke2SecurePassword\nEOF\n")),(0,a.kt)("p",null,"Now that the configuration file is completed, let's install and start the RKE2 Worker/Agent Nodes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### server(s): rke2-wk-01 and rke2-wk-02\n### Download the RKE2 Worker/Agent Binary\ncurl -sfL https://get.rke2.io | INSTALL_RKE2_CHANNEL=v1.24 INSTALL_RKE2_TYPE=agent sh -\n\n### Start the RKE2 Worker/Agent Service\nsystemctl enable rke2-agent.service && systemctl start rke2-agent.service\n")),(0,a.kt)("p",null,"Let's head back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-cp-01")," server and verify the worker/agent nodes sucessfully joined the cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### server(s): rke2-cp-01\n### Verify status with kubectl\nkubectl get nodes\n")),(0,a.kt)("p",null,"It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-rke2-cp-01-kubectl-all",src:r(6333).Z,width:"2950",height:"252"})),(0,a.kt)("p",null,"Congraulations!! In a few minutes, you now have a Rancher RKE2 Kubernetes Cluster up and running! If you are already familiar with Kubernetes or RKE2, feel free to explore the cluster using ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),". We are going to move onto installing the ",(0,a.kt)("a",{parentName:"p",href:"https://www.rancher.com/products/rancher"},"Rancher Multi Cluster Manager"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.rancher.com/products/longhorn"},"Rancher Longhorn"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://ranchergovernment.com/neuvector"},"Rancher NeuVector"),"."),(0,a.kt)("h2",{id:"rancher-multi-cluster-manager"},"Rancher Multi Cluster Manager"),(0,a.kt)("p",null,"When most folks are starting their Kubernetes journey and their journey with Rancher Kubernetes, there is some confusion about the layers of Kubernetes. Rancher RKE2 is our Kubernetes distribution and the Rancher Multi Cluster Manager is our single pane of glass dashboard for managing any type of Kubernetes cluster (including our not to be named competitors). In order to run our Rancher Manager, we needed to start with a Kubernetes cluster and that's why we started with installing Rancher RKE2!"),(0,a.kt)("p",null,"Let's get started with installing the Rancher Manager! In order to get the bits required to configure and install it, we need to use the ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh"},"Helm CLI")," for package management and then grab ",(0,a.kt)("a",{parentName:"p",href:"https://cert-manager.io"},"Cert Manager")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.io"},"Rancher Manager"),". Let's use ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," to access the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-cp-01")," server and run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### server(s): rke2-cp-01\n### Download and Install Helm CLI\nmkdir -p /opt/rancher/helm\ncd /opt/rancher/helm\n\ncurl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3\nchmod 700 get_helm.sh && ./get_helm.sh\nmv /usr/local/bin/helm /usr/bin/helm\n")),(0,a.kt)("p",null,"Now let's add the Helm Repositories for Cert Manager and the Rancher Manager!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### server(s): rke2-cp-01\n### Add and update the helm repositories\nhelm repo add jetstack https://charts.jetstack.io \nhelm repo add rancher-latest https://releases.rancher.com/server-charts/latest\nhelm repo update\n")),(0,a.kt)("p",null,"It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-helm-repo-status",src:r(9168).Z,width:"2950",height:"472"})),(0,a.kt)("p",null,"Now let's install Cert Manager with the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### server(s): rke2-cp-01\n### Create the Cert Manager Namespace and Install Cert Manager\nkubectl create namespace cert-manager\nhelm upgrade -i cert-manager jetstack/cert-manager --namespace cert-manager --set installCRDs=true \n\n### Wait for the deployment/rollout\nsleep 30\n\n### Verify the status of Cert Manager\nkubectl get pods --namespace cert-manager\n")),(0,a.kt)("p",null,"It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-cert-manager-status",src:r(3620).Z,width:"2950",height:"252"})),(0,a.kt)("p",null,"Now let's install the Rancher Manager with the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### server(s): rke2-cp-01\n### Create the Rancher Namespace and Install Rancher\n### sslip.io is a DNS provider that converts an ip address to a hostname\nkubectl create namespace cattle-system\nhelm upgrade -i rancher rancher-latest/rancher --namespace cattle-system --set bootstrapPassword=rancherSecurePassword --set hostname=rancher.10.0.0.15.sslip.io\n\n### Wait for the deployment/rollout\nsleep 30\n\n### Verify the status of the Rancher Manager\nkubectl get pods --namespace cattle-system\n")),(0,a.kt)("p",null,"It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-rancher-manager-status",src:r(8967).Z,width:"2950",height:"412"})),(0,a.kt)("h3",{id:"exploring-the-rancher-manager"},"Exploring the Rancher Manager"),(0,a.kt)("p",null,"Once all the pods show as ",(0,a.kt)("inlineCode",{parentName:"p"},"Running")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace, you can access the Rancher Manager! Since we are using ",(0,a.kt)("inlineCode",{parentName:"p"},"sslip.io")," as our Hostname/DNS, we do not need to configure anything else to access the Rancher Manager. Let's head over the domain name and take a look at the Rancher Manager! "),(0,a.kt)("p",null,"For my deployment, I will be using ",(0,a.kt)("inlineCode",{parentName:"p"},"https://rancher.10.0.0.15.sslip.io")," to access the Rancher Manager. "),(0,a.kt)("p",null,"It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-rancher-manager-bootstrap",src:r(940).Z,width:"3456",height:"2234"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-rancher-manager-terms",src:r(6040).Z,width:"3456",height:"2234"})),(0,a.kt)("p",null,"You should now see the Rancher Manager asking for a password that we set during installation. For my deployment, I will be using ",(0,a.kt)("inlineCode",{parentName:"p"},"rancherSecurePassword"),". You will also have to verify the Rancher Manager URL and accept the Terms and Conditions. Once that is completed... It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-rancher-manager-home",src:r(4058).Z,width:"3456",height:"2234"})),(0,a.kt)("p",null,"You now have the Rancher Manager sucessfully deployed on our RKE2 Kubernetes Cluster!!! Remember there are many ways to configure and this was only a minimal installation. Feel free to explore everything you are able to do inside of the Rancher Manager, or we can move onto the next step of installing ",(0,a.kt)("a",{parentName:"p",href:"https://www.rancher.com/products/longhorn"},"Rancher Longhorn"),"."),(0,a.kt)("h2",{id:"rancher-longhorn"},"Rancher Longhorn"),(0,a.kt)("p",null,"Let's move up the stack and start thinking about storage. Rancher Longhorn provides cloud native and highly available persistent block storage for Kubernetes, with backups and disaster recovery. In order to install Longhorn onto our cluster, we pretty much follow the same steps as we did for Cert Manager and the Rancher Manager."),(0,a.kt)("p",null,"Let's add the Helm Repository for Longhorn!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### server(s): rke2-cp-01\n### Add and update the helm repository\nhelm repo add longhorn https://charts.longhorn.io\nhelm repo update\n")),(0,a.kt)("p",null,"It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-helm-repo-status-longhorn",src:r(9451).Z,width:"2950",height:"452"})),(0,a.kt)("p",null,"Now let's install Longhorn with the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### server(s): rke2-cp-01\n### Create the Longhorn Namespace and Install Longhorn\nkubectl create namespace longhorn-system\nhelm upgrade -i longhorn longhorn/longhorn --namespace longhorn-system --set ingress.enabled=true --set ingress.host=longhorn.10.0.0.15.sslip.io\n\n### Wait for the deployment/rollout\nsleep 30\n\n### Verify the status of Longhorn\nkubectl get pods --namespace longhorn-system\n")),(0,a.kt)("p",null,"It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-longhorn-status",src:r(8371).Z,width:"2950",height:"1572"})),(0,a.kt)("h3",{id:"exploring-rancher-longhorn"},"Exploring Rancher Longhorn"),(0,a.kt)("p",null,"Once all the pods show as ",(0,a.kt)("inlineCode",{parentName:"p"},"Running")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"longhorn-system")," namespace, you can access Rancher Longhorn! Just like the Rancher Manager, we are utilizing ",(0,a.kt)("inlineCode",{parentName:"p"},"sslip.io"),", so there is no additional configuration required to access Longhorn. Let's head over to the domain name."),(0,a.kt)("p",null,"For my deployment, I will be using ",(0,a.kt)("inlineCode",{parentName:"p"},"https://longhorn.10.0.0.15.sslip.io")," to access Rancher Longhorn. "),(0,a.kt)("p",null,"It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-longhorn-home",src:r(3190).Z,width:"3456",height:"2234"})),(0,a.kt)("p",null,"You now have Rancher Longhorn successfully deployed on our RKE2 Kuberenetes Cluster with the Rancher Manager!! Feel free to explore the Longhorn dashboard and see how easy it is to manage your volumes, backup to an S3 Bucket, or setup cross-cluster disaster recovery. Once you're ready, let's move onto ",(0,a.kt)("a",{parentName:"p",href:"https://ranchergovernment.com/neuvector"},"Rancher NeuVector"),"."),(0,a.kt)("h2",{id:"rancher-neuvector"},"Rancher NeuVector"),(0,a.kt)("p",null,"Let's add the Helm Repository for NeuVector!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### server(s): rke2-cp-01\n### Add and update the helm repository\nhelm repo add neuvector https://neuvector.github.io/neuvector-helm\nhelm repo update\n")),(0,a.kt)("p",null,"It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-helm-repo-status-neuvector",src:r(8235).Z,width:"2950",height:"492"})),(0,a.kt)("p",null,"Now let's install NeuVector with the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### server(s): rke2-cp-01\n### Create the NeuVector Namespace and Install NeuVector\nkubectl create namespace cattle-neuvector-system\n\nhelm upgrade -i neuvector neuvector/core --namespace cattle-neuvector-system --set k3s.enabled=true --set k3s.runtimePath=/run/k3s/containerd/containerd.sock --set manager.ingress.enabled=true --set manager.svc.type=ClusterIP --set controller.pvc.enabled=true --set manager.ingress.host=neuvector.10.0.0.15.sslip.io --set global.cattle.url=https://rancher.10.0.0.15.sslip.io --set controller.ranchersso.enabled=true --set rbac=true\n\n### Wait for the deployment/rollout\nsleep 30\n\n### Verify the status of Longhorn\nkubectl get pods --namespace cattle-neuvector-system\n")),(0,a.kt)("p",null,"It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-neuvector-status",src:r(7476).Z,width:"2950",height:"532"})),(0,a.kt)("h3",{id:"exploring-rancher-neuvector"},"Exploring Rancher NeuVector"),(0,a.kt)("p",null,"Once all the pods show as ",(0,a.kt)("inlineCode",{parentName:"p"},"Running")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-neuvector-system")," namespace, you can access Rancher NeuVector! Just like the Rancher Manager and Rancher Longhorn, we are utilizing ",(0,a.kt)("inlineCode",{parentName:"p"},"sslip.io"),", so there is no additional configuration required to access NeuVector. Let's head over to the domain name."),(0,a.kt)("p",null,"For my deployment, I will be using ",(0,a.kt)("inlineCode",{parentName:"p"},"https://neuvector.10.0.0.15.sslip.io")," to access Rancher NeuVecutor. "),(0,a.kt)("p",null,"It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-neuvector-bootstrap",src:r(4509).Z,width:"3456",height:"2234"})),(0,a.kt)("p",null,"You should now see NeuVector asking for a the default username and password. The default username is ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," and the default password is ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,a.kt)("p",null,"It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rancher-neuvector-home",src:r(5289).Z,width:"3456",height:"2234"})),(0,a.kt)("p",null,"You now have Rancher NeuVector deployed on our RKE2 Kuberenetes Cluster with the Rancher Manager and Rancher Longhorn!! Feel free to explore the NeuVector and run vulneriablity scans, investigate cluster assets, or check out your network activity. Here is where we would usually recommend users to try creating a new cluster or deploying a few test applications to see the true power behind Rancher. For now, we're going to move onto our final thoughts..."),(0,a.kt)("h2",{id:"final-thoughts"},"Final Thoughts"),(0,a.kt)("p",null,"In a few easy steps and a few minutes of your time, you have the core Rancher Stack deployed out and ready for use. I would say that statement alone is a very powerful considering the alternatives out there."),(0,a.kt)("p",null,"If you have any issues with this deployment guide, please submit an issue or merge request. If you would like to learn more or get in touch with me (including how to STIG your cluster), please contact me at ",(0,a.kt)("a",{parentName:"p",href:"mailto:zbrady@zackbrady.com"},"zbrady@zackbrady.com"),"!"))}p.isMDXComponent=!0},3620:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-cert-manager-status-94b6f96f29534dfe8164e5cdde2009b0.png"},3195:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-harvester-vm-overview-e6f9e8a2e9e3679cf269ecd230aa743c.png"},9451:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-helm-repo-status-longhorn-008ce9f013543c44497cd3ed601bb42d.png"},8235:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-helm-repo-status-neuvector-a83f3a07c82596959a50640d254e7a43.png"},9168:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-helm-repo-status-19524e3083462dc557cae13877b46ee2.png"},3190:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-longhorn-home-cd297d0470af51be62db4b3f3fb7d51b.png"},8371:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-longhorn-status-ca7a582f9e8babbf7f27fde543d4623d.png"},4509:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-neuvector-bootstrap-0ec052092db25000e06666d77f75a8af.png"},5289:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-neuvector-home-d8e24f81bb80cd74717842b69cd7d2b8.png"},7476:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-neuvector-status-ea6c35a7915d58e70413d46a60d8d82d.png"},940:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-rancher-manager-bootstrap-a42247c94383663d6aa4ba989367b3e9.png"},4058:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-rancher-manager-home-0b0e816fe5824ad6b63e209bce5f0e83.png"},8967:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-rancher-manager-status-5746332e4d3e8656997e7b49a9ad2f94.png"},6040:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-rancher-manager-terms-7a659e923773fa48935810fe62884538.png"},6333:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-rke2-cp-01-kubectl-all-3357e0c22c796850469586cafd3cc967.png"},5308:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-rke2-cp-01-kubectl-3db3a1462ac99b50af88ad04a6f8d7ed.png"},7789:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-rke2-cp-01-systemctl-4f58f3c2d1fe550b92dc06e7becf2ce6.png"},4988:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rgs-effortless-banner-335579f16ca879be15d2a49aecb03173.png"}}]);