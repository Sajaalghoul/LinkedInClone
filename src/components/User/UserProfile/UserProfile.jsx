import React from "react";
import {
  UserCardWrapper,
  UserProfileImage,
  EductaionSection,
  Specialization,
  Location,
  UserName,
  CardBackground,
} from "../../common/UserCardInfo/UserCardInfo";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <UserCardWrapper user={user} className="mt-20 ml-56 w-3/6 mx-20 bg-white ">
      <CardBackground className="w-16 h-48" />
      <UserProfileImage
        image={user?.photoURL}
        className="w-32 left-14 rounded-full"
        style={{ top: "100px" }}
      />
      <div className="flex flex-col my-12 mx-6">
        <div className="flex justify-between mr-6">
          <UserName name={user?.displayName} className="font-bold" />
          <Link to="/user/useredit">
            <img
              src="../../../assets/images/edit-button.svg"
              className="w-4 cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex justify-between mr-6">
          <Specialization className="text-sm" headline={user?.headline} />
          {user?.college && <EductaionSection education={user?.college} />}
        </div>
        {user?.country && (
          <Location location={`${user?.country}, ${user.city}`} />
        )}
      </div>
    </UserCardWrapper>
  );
};

export default UserProfile;
