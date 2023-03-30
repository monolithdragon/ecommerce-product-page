import AvatarImage from 'assets/images/image-avatar.png';

function Avatar() {
  return (
    <button className="rounded-full outline-none hover:ring-[3px] hover:ring-skin-primary focus:ring-[3px] focus:ring-skin-primary">
      <img src={AvatarImage} alt="avatar" className="w-7 md:w-8 lg:w-10" />
    </button>
  );
}

export default Avatar;
