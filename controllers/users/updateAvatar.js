const { User } = require('../../models')
const path = require('path')
const fs = require('fs').promises
const Jimp = require('jimp')

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars')

const updateAvatar = async(req, res) => {
  const { path: tmpUpload, originalname } = req.file
  const { _id: id } = req.user
  const imageName = `${id}_${originalname}`
  try {
    const file = await Jimp.read(tmpUpload)
    await file.resize(250, 250).write(tmpUpload)

    const resultUpload = path.join(avatarsDir, imageName)
    await fs.rename(tmpUpload, resultUpload)
    const avatarURL = path.join('public', 'avatars', imageName)
    await User.findByIdAndUpdate(req.user._id, { avatarURL })
    res.json({ avatarURL })
  } catch (error) {
    await fs.unlink(tmpUpload)
    throw error
  }
}

module.exports = updateAvatar