import preset from '../'

describe('babel-preset-nodely', () => {
  let api

  beforeEach(() => {
    api = {
      cache: {
        never: jest.fn(),
      },
    }
  })

  it('should export a function', () => {
    expect(preset).toBeInstanceOf(Function)
  })

  describe('when no options provided', () => {
    let result

    beforeEach(() => {
      result = preset(api)
    })

    it('should never cache config', () => {
      expect(api.cache.never).toHaveBeenCalled()
    })

    it('should provide expected config', () => {
      expect(result).toMatchSnapshot()
    })
  })

  describe('when env is node', () => {
    let result

    beforeEach(() => {
      result = preset(api, {env: 'node'})
    })

    it('should never cache config', () => {
      expect(api.cache.never).toHaveBeenCalled()
    })

    it('should provide expected config', () => {
      expect(result).toMatchSnapshot()
    })
  })

  describe('when env is web', () => {
    let result

    beforeEach(() => {
      result = preset(api, {env: 'web'})
    })

    it('should never cache config', () => {
      expect(api.cache.never).toHaveBeenCalled()
    })

    it('should provide expected config', () => {
      expect(result).toMatchSnapshot()
    })
  })
})
