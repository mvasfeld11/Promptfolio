import React from 'react'
const github_username = 'mvasfeld11'
const email = 'mvasfeld@gmail.com'

const projects = [
	'mvasfeld11/BotClient',
	'mvasfeld11/Shellplate',
	'mvasfeld11/Fakestream',
	'mvasfeld11/ControlPanelAPI.js',
	'mvasfeld11/Deb8M8',
	'mvasfeld11/EmojiSteal',
]

const links = [
	{
		name: 'GitHub',
		icon: 'fab fa-fw fa-github',
		link: 'https://github.com/mvasfeld11',
		description: 'My profile on GitHub',
	},
	{
		name: 'Website',
		icon: 'fas fa-fw fa-coffee',
		link: 'https://mvasfeld11.github.io/',
		description: 'Personal website',
	},
	{
		name: 'E-mail',
		icon: 'fas fa-fw fa-at',
		link: `mailto:${email}`,
		description: 'Lets get in touch!',
	},
]

const info = (
	<>
		<p>Hey! I'm a recent UW-Madison Graduate</p>
		<p>
			I've started to learn{' '}
			<span className="highlighted">front-end web designing</span> as a
			fun pastime for a couple of months now. Currently, I'm learning{' '}
			<span className="highlighted">React</span> and{' '}
			<span className="highlighted">Next.js</span>
		</p>
	</>
)

export { github_username, email, projects, links, info }
