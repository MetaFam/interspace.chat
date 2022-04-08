import * as THREE from 'three'
import * as dat from 'lil-gui'

/**
 * Base
 */

// Debug
// const gui = new dat.GUI({width: 400})


// Scene
const scene = new THREE.Scene()
export const galaxyColors = {
    inside: '#C92F81',
    outside: '#79F8FB'
}

/**
 * Galaxy
 */
export const galaxy1Params = {
    count: 50000,
    size: 0.033,
    radius: 4.86,
    branches: 3,
    spin: .9,
    randomness: 5,
    randomnessPower: 3.248,
    insideColor: galaxyColors.inside,
    outsideColor: galaxyColors.outside,
    type: 2
}
export const galaxy2Params = {
    count: 50000,
    size: 0.01,
    radius: 2,
    branches: 3,
    spin: 3,
    randomness: 5,
    randomnessPower: 3.62,
    insideColor: galaxyColors.inside,
    outsideColor: galaxyColors.outside,
    type: 1
}
// gui.addColor(galaxy2Params, 'insideColor').onFinishChange()

export const galaxy3Params = {
    count: 600000,
    size: 0.023,
    radius: 9.86,
    branches: 10,
    spin: 2,
    randomness: 1,
    randomnessPower: 2,
    insideColor: galaxyColors.inside,
    outsideColor: galaxyColors.outside,
    type: 3
}

let geometry = null
let material = null
let points = null

export const generateGalaxy = (params) => {
    // Destroy old galaxy
    if (points !== null) {
        geometry.dispose()
        material.dispose()
        scene.remove(points)
    }

    /**
     * Geometry
     */
    geometry = new THREE.BufferGeometry()

    const positions = new Float32Array(params.count * 3)
    const colors = new Float32Array(params.count * 3)
    const colorInside = new THREE.Color(params.insideColor)
    const colorOutside = new THREE.Color(params.outsideColor)

    // Type 1
    if (params.type === 1) {
        for (let i = 0; i < params.count; i++) {
            const i3 = i * 3
            const radius = Math.random() * params.radius
            const spinAngle = radius * params.spin
            const branchAngle = (i % params.branches) / params.branches * Math.PI * 2

            const randomX = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
            const randomY = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
            const randomZ = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)

            positions[i3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX
            positions[i3 + 1] = Math.sin(spinAngle + radius) * (radius - Math.PI * 2)
            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

            const mixedColor = colorInside.clone()
            mixedColor.lerp(colorOutside, radius / params.radius * 1.1)

            colors[i3 + 0] = mixedColor.r
            colors[i3 + 1] = mixedColor.g
            colors[i3 + 2] = mixedColor.b


            if (i < 20) {
                console.log(i, branchAngle)
            }
        }
    } else if (params.type === 2) {
        for (let i = 0; i < params.count; i++) {
            const i3 = i * 3
            const radius = Math.random() * params.radius
            const spinAngle = radius * params.spin
            const branchAngle = (i % params.branches) / params.branches * Math.PI * 2

            const randomX = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
            const randomY = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
            const randomZ = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)

            positions[i3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX
            positions[i3 + 1] = (Math.PI * 0.12) * radius + randomY
            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

            const mixedColor = colorInside.clone()
            mixedColor.lerp(colorOutside, radius / params.radius * 1.1)

            colors[i3 + 0] = mixedColor.r
            colors[i3 + 1] = mixedColor.g
            colors[i3 + 2] = mixedColor.b


            if (i < 20) {
                console.log(i, branchAngle)
            }
        }

    } else if (params.type === 3) {
        for (let i = 0; i < params.count; i++) {
            const i3 = i * 3
            const radius = Math.random() * params.radius
            const spinAngle = radius * params.spin
            const branchAngle = (i % params.branches) / params.branches * Math.PI * 2

            const randomX = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
            const randomY = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
            const randomZ = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)

            positions[i3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX
            positions[i3 + 1] = Math.cos(spinAngle + radius) * radius + randomY
            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

            const mixedColor = colorInside.clone()
            mixedColor.lerp(colorOutside, radius / params.radius * 1.05)

            colors[i3 + 0] = mixedColor.r
            colors[i3 + 1] = mixedColor.g
            colors[i3 + 2] = mixedColor.b


            if (i < 20) {
                console.log(i, branchAngle)
            }
        }
    }

    geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
    )

    geometry.setAttribute(
        'color',
        new THREE.BufferAttribute(colors, 3)
    )

    /**
     * Materials
     */
    material = new THREE.PointsMaterial({
        size: params.size,
        sizeAttenuation: true,
        // depth: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
    })

    /**
     * Points
     */
    points = new THREE.Points(geometry, material)
    return points

}




