import { expect } from 'chai'
import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from '../src/main'

describe('Spotify Wrapper', () => {
  describe('Smoke Tests', () => {
    it('should exists the search method', () => {
      expect(search).to.exist
    })
    it('should exists the searchAlbums method', () => {
      expect(searchAlbums).to.exist
    })
    it('should exists the export const searchArtists = () => {} method', () => {
      expect(searchArtists).to.exist
    })
    it('should exists the searchTracks method', () => {
      expect(searchTracks).to.exist
    })
    it('should exists the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist
    })
  })
})
