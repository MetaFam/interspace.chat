import React, { Fragment, useContext } from 'react';

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext';

const portalStyle = {
	marginTop: '10px',
};

function openInNewTab(url) {
	let win = window.open(url, '_blank');
	win.focus();
}

const Space = () => {
	const { currentFloatingSpaces, addFloatingSpace } = useContext(
		FloatingSpaceContext
	);

	let displayedJoinedSpaces;
	if (currentFloatingSpaces.length > 0) {
		if (currentFloatingSpaces.length > 2) {
			let nameCount = currentFloatingSpaces.length;
			displayedJoinedSpaces =
				currentFloatingSpaces.slice(0, nameCount - 2).join(', ') +
				', ' +
				currentFloatingSpaces
					.slice(nameCount - 2, nameCount)
					.join(' & ');
		} else {
			displayedJoinedSpaces = currentFloatingSpaces.join(' & ');
		}
	}

	return (
		<div className='map-container'>
			<div style={{ zIndex: 1, marginBottom: '1rem' }}>
				Welcome to{' '}
				<a
					href='https://metagame.wtf'
					target='_blank'
					rel='noopener noreferrer'
				>
					MetaGame
				</a>
				<i style={{ fontSize: '0.6em' }}> v0.1</i>
			</div>
			<div className='octo-container'>
				<img src='metaspace.png' className='image-map' alt='map' />
				<div
					className='click-zone a'
					onClick={() => addFloatingSpace('House of Defiance')}
				>
					House of Defiance
				</div>
				<div
					className='click-zone b'
					onClick={() => addFloatingSpace('House of DAOs')}
				>
					House of DAOs
				</div>
				<div
					className='click-zone c'
					onClick={() => addFloatingSpace('Raid Guild')}
				>
					Raid Guild
				</div>
				<div
					className='click-zone d'
					data-zone='stress-test-arena'
					onClick={() => addFloatingSpace('Stress Test Arena')}
				>
					Stress Test Arena
				</div>
				<div
					className='click-zone e'
					onClick={() => addFloatingSpace('House of Adoption')}
				>
					House of Adoption
				</div>
				<div
					className='click-zone f'
					onClick={() => addFloatingSpace('loft.radio')}
				>
					loft.radio
				</div>
				<div
					className='click-zone g'
					onClick={() => addFloatingSpace('rTrees')}
				>
					rTrees
				</div>
				<div
					className='click-zone h'
					onClick={() => openInNewTab('https://forum.metagame.wtf/')}
				>
					Forum
				</div>
			</div>
			<div style={{ zIndex: 1 }}>
				Feel free to make improvements to the map, download the .psd
				file{' '}
				<a href='https://www.dropbox.com/s/cocwaannzy8lqty/Interspace%20v0.2.psd?dl=0'>
					here
				</a>{' '}
				and share with us <a href='https://discord.gg/cZjqQmE'>there</a>
			</div>
		</div>
	);
};

export default Space;
