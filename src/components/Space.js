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
		<div>
			<span style={{ marginBottom: '0px' }}>
				<div
					style={{
						position: 'absolute',
						top: '10px',
						left: 0,
						right: 0,
						margin: 'auto',
					}}
				>
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
				<div>
					{displayedJoinedSpaces && (
						<Fragment>
							You're in the <div>{displayedJoinedSpaces}</div>!
						</Fragment>
					)}
				</div>
			</span>

			<div className='map-container'>
				<img src='metaspace.png' className='image-map' alt='map' />
				<div
					className='click-zone a'
					onClick={() => addFloatingSpace('House of Defiance')}
				>
					<span className='roomName'>House of Defiance</span>
					<div className='click-zone-highlight a'></div>
				</div>
				<div
					className='click-zone b'
					onClick={() => addFloatingSpace('House of DAOs')}
				>
					<span className='roomName'>House of DAOs</span>
					<div className='click-zone-highlight b'></div>
				</div>
				<div
					className='click-zone c'
					onClick={() => addFloatingSpace('Raid Guild')}
				>
					<span className='roomName'>Raid Guild</span>
					<div className='click-zone-highlight c'></div>
				</div>
				<div
					className='click-zone d'
					data-zone='stress-test-arena'
					onClick={() => addFloatingSpace('Stress Test Arena')}
				>
					<span className='roomName' style={portalStyle}>
						Stress Test Arena
					</span>
					<div className='click-zone-highlight d'></div>
				</div>
				<div
					className='click-zone e'
					onClick={() => addFloatingSpace('House of Adoption')}
				>
					<span className='roomName'>House of Adoption</span>
					<div className='click-zone-highlight e'></div>
				</div>
				<div
					className='click-zone f'
					onClick={() => addFloatingSpace('loft.radio')}
				>
					<span className='roomName'>loft.radio</span>
					<div className='click-zone-highlight f'></div>
				</div>
				<div
					className='click-zone g'
					onClick={() => addFloatingSpace('rTrees')}
				>
					<span className='roomName'>rTrees</span>
					<div className='click-zone-highlight g'></div>
				</div>
				<div
					className='click-zone h'
					onClick={() => openInNewTab('https://forum.metagame.wtf/')}
				>
					<span className='roomName'>Forum</span>
					<div className='click-zone-highlight h'></div>
				</div>
			</div>
			<div
				style={{
					position: 'absolute',
					bottom: '10px',
					left: 0,
					right: 0,
					margin: 'auto',
				}}
			>
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
